interface Props {
  page: number;
  pages: number;
  decrementPage: () => void;
  incrementPage: () => void;
}

const Pager = ({ page, pages, decrementPage, incrementPage }: Props) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-center gap-2">
        {page > 1 ? (
          <button
            onClick={decrementPage}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-700"
          >
            {page - 1}
          </button>
        ) : (
          <div className="h-10 w-10" />
        )}
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700">
          {page}
        </button>
        {page < pages ? (
          <button
            onClick={incrementPage}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-700"
          >
            {page + 1}
          </button>
        ) : (
          <div className="h-10 w-10" />
        )}
      </div>
      <div className="flex justify-center">Page Number</div>
    </div>
  );
};

export default Pager;
