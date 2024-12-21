import { GetServerSideProps, NextPage } from 'next';

interface SearchProps {
  query: string;
}

export const getServerSideProps: GetServerSideProps<SearchProps> = async (context) => {
  const query = (context.query.query as string) || '';
  return {
    props: {
      query,
    },
  };
};

const Search: NextPage<SearchProps> = ({ query }) => {
  return (
    <div className="search-results">
      <h1>Search Results for: {query}</h1>
    </div>
  );
};

export default Search;
