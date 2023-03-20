interface Props {
  page: number;
  pages: number;
  decrementPage: () => void;
  incrementPage: () => void;
}

const Pager = ({ page, pages, decrementPage, incrementPage }: Props) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center gap-3">
        {page > 1 ? (
          <button
            onClick={decrementPage}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-solid border-white transition-all hover:scale-110"
          >
            {page - 1}
          </button>
        ) : (
          <div className="h-8 w-8" />
        )}
        <button className="flex h-10 w-10 items-center justify-center rounded-full border border-solid border-white">
          {page}
        </button>
        {page < pages ? (
          <button
            onClick={incrementPage}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-solid border-white transition-all hover:scale-110"
          >
            {page + 1}
          </button>
        ) : (
          <div className="h-8 w-8" />
        )}
      </div>
      <div className="flex justify-center">
        Page {page} of {pages}
      </div>
    </div>
  );
};

export default Pager;
