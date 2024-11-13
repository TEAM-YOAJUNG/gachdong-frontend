'use client';

import { useParams, useRouter } from 'next/navigation';
import { PostInfoSection } from './PostInfoSection';
import { ProcessSection } from './ProcessSection';
import { ApplicationTemplate } from './ApplicationTemplate';
import { ActionButtons } from './ActionButtons';
import { usePostInfo } from '../../hooks/usePostInfo';
import { useQuestions } from '../../hooks/useQuestions';
import { useCreateApplicationForm } from '@/apis/application/mutation';
import { useCreateClubRecruitment } from '@/apis/club';
import { useMemo } from 'react';

export default function RecruitmentForm() {
  const router = useRouter();
  const params = useParams();
  const { postInfo, handlePostInfoChange, addProcess, updateProcess, removeProcess } = usePostInfo();
  const { mutateAsync: createClubRecruitment } = useCreateClubRecruitment();
  const { mutateAsync: createApplicationForm } = useCreateApplicationForm();

  const {
    questions,
    addQuestion,
    updateQuestion,
    removeQuestion,
    handleQuestionReorder,
    addOption,
    updateOption,
    removeOption,
  } = useQuestions();

  const handleSaveDraft = async () => {
    try {
      // TODO: API 호출 구현
      console.log('임시 저장:', { postInfo, questions });
    } catch (error) {
      console.error('임시 저장 실패:', error);
      // TODO: 에러 처리
    }
  };

  const handlePublish = async () => {
    try {
      // TODO: postInfo 검증하기

      const processData = Object.fromEntries(
        postInfo.processes.map((process, index) => [`process${index + 1}`, { title: process, order: index + 1 }])
      );

      const { clubRecruitmentId } = await createClubRecruitment({
        clubId: Number(params.id),
        title: postInfo.title,
        content: postInfo.content,
        recruitmentCount: 10, // FIXME: 삭제 예정
        startDate: new Date(postInfo.startDate).toISOString(),
        endDate: new Date(postInfo.endDate).toISOString(),
        processData: processData,
      });

      const formBody = Object.fromEntries(questions.map((question, index) => [`question${index + 1}`, question]));

      createApplicationForm(
        {
          applyId: clubRecruitmentId,
          status: 'SAVED',
          formName: '모집 공고 양식', // FIXME: 수정
          formBody,
        },
        { onSuccess: () => router.push(`/dashboard/${params.id}/recruitment`) }
      );
    } catch (error) {
      console.error('공고 게시 실패:', error);
      // TODO: 에러 처리
    }
  };

  const isFormValid = useMemo(() => {
    // 필수 입력값 검증
    const isPostInfoValid =
      postInfo.title.trim() !== '' &&
      postInfo.content.trim() !== '' &&
      postInfo.startDate !== null &&
      postInfo.endDate !== null;

    // 프로세스가 최소 1개 이상 있어야 함
    const isProcessValid = postInfo.processes.length > 0;

    // 질문이 최소 1개 이상 있어야 함
    const isQuestionsValid = questions.length > 0;

    return isPostInfoValid && isProcessValid && isQuestionsValid;
  }, [postInfo, questions]);

  return (
    <div className="space-y-6">
      <PostInfoSection postInfo={postInfo} onChange={handlePostInfoChange} />

      <ProcessSection
        processes={postInfo.processes}
        onAdd={addProcess}
        onUpdate={updateProcess}
        onRemove={removeProcess}
      />

      <ApplicationTemplate
        questions={questions}
        onAdd={addQuestion}
        onUpdate={updateQuestion}
        onRemove={removeQuestion}
        onReorder={handleQuestionReorder}
        onAddOption={addOption}
        onUpdateOption={updateOption}
        onRemoveOption={removeOption}
      />

      <ActionButtons onSaveDraft={handleSaveDraft} onPublish={handlePublish} isValid={isFormValid} />
    </div>
  );
}
