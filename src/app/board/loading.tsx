import SkeletonBoard from '@/components/SkeletonBoard';
import asyncDelay from '@/utils/delay';

async function Loading() {
  await asyncDelay();

  return (
    <main className="h-[80%]">
      <div className="h-[8%]" />
      <section className="m-10 h-4/5 bg-white">
        <SkeletonBoard />
      </section>
      <section />
      <div className="flex justify-center">
        <div className="h-7 w-10 animate-pulse rounded-lg bg-gray text-center" />
      </div>
    </main>
  );
}

export default Loading;
