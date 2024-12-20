export const keys = {
  all: ['application'],
  clubApplicationList: (clubId: number) => [...keys.all, 'clubApplicationList', clubId] as const,
  formInfoAdmin: (formId: number) => [...keys.all, 'formInfoAdmin', formId] as const,
  clubApplication: (applicationId: number) => [...keys.all, 'clubApplication', applicationId] as const,
  clubApplicationFormList: (clubId: number) => [...keys.all, 'clubApplicationFormList', clubId] as const,
} as const;
