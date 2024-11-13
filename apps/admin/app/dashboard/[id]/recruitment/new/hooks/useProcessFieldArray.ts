import { useFieldArray, useFormContext } from 'react-hook-form';
import type { RecruitmentFormData, Process } from '../schemas';

export function useProcessFieldArray() {
  const { control } = useFormContext<RecruitmentFormData>();

  return useFieldArray<RecruitmentFormData, 'processes'>({
    control,
    name: 'processes',
  });
}
