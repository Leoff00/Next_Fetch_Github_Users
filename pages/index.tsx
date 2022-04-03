import { GetStaticProps } from "next";

export default function Home({ res }: any) {
  return (
    <div>
      <h3>{res.name}</h3>
      <h3>{res.html_url}</h3>
      <h3>{res.blog}</h3>
      <h3>{res.bio}</h3>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com");
  const data = await response.json();

  return {
    props: {
      res: data,
    },
    revalidate: 10,
  };
};
