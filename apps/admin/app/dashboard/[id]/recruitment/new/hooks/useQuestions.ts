import { useState } from 'react';
import { Question } from '../types';

export function useQuestions() {
  const [questions, setQuestions] = useState<Question[]>([]);

  const addQuestion = () => {
    setQuestions(prev => [
      ...prev,
      {
        type: 'shortText',
        name: `question_${prev.length + 1}`,
        label: '',
        description: null,
        required: false,
      } as Question,
    ]);
  };

  const updateQuestion = (index: number, updates: Partial<Question>) => {
    setQuestions(prev => {
      const newQuestions = [...prev];
      newQuestions[index] = {
        ...newQuestions[index],
        ...updates,
      } as Question;
      return newQuestions;
    });
  };

  const removeQuestion = (index: number) => {
    setQuestions(prev => prev.filter((_, i) => i !== index));
  };

  const handleQuestionReorder = (startIndex: number, endIndex: number) => {
    setQuestions(prev => {
      const result = Array.from(prev);
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed as Question);
      return result;
    });
  };

  const addTemplate = (templateQuestions: readonly Question[]) => {
    setQuestions(prev => [...prev, ...structuredClone(templateQuestions)]);
  };

  return {
    questions,
    addQuestion,
    updateQuestion,
    removeQuestion,
    handleQuestionReorder,
    addTemplate,
  };
}
