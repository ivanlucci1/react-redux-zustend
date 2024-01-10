import { useCurrentLesson, useStore } from "../zustend-store";

export function Header() {
  const isLoading = useStore((store) => store.isLoading);
  const { currentModule, currentLesson } = useCurrentLesson();

  if (isLoading) {
    return <h1 className="text-2xl font-bold">Carregando...</h1>;
  }

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{currentModule?.title}</h1>
      <span className="text-sm text-zinc-400">
        Módulo "{currentLesson?.title}"
      </span>
    </div>
  );
}
