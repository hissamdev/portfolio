

export default function StackedCards() {
  return (
    <>
        <div className="stacked-portfolios flex justify-center items-center relative w-98">
            <div className="bg-black top-0 left-0 z-10 stacked-card"></div>
            <div className="bg-purple-400 top-8 left-2 z-20 stacked-card"></div>
            <div className="bg-black top-16 left-4 z-30 stacked-card"></div>
            <div className="bg-purple-400 top-25 left-6 z-40 stacked-card"></div>
        </div>
    </>
  );
}