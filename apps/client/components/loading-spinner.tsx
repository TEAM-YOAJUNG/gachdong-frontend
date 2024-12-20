export function LoadingSpinner() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="border-primary h-8 w-8 animate-spin rounded-full border-4 border-t-transparent" />
    </div>
  );
}
