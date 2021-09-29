export async function getStaticPaths() {
  const paths = [
    {
      params: { query: ["search", "ben"] },
    },
  ];
  console.log(paths);
  return { paths: paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  console.log(params);
  return {
    props: {
      query: params?.query,
    },
    revalidate: 600, // 10 mins
  };
}

export default function SearchPage(props) {
  return <div>Search: {JSON.stringify(props)}</div>;
}
