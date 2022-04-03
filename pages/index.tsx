import { GetStaticProps } from "next";
interface responseDataProps {
  id: number;
  name: string;
  username: string;
  email: string;
}
interface ResponseData {
  response: [responseDataProps];
}

export default function Home({ response }: ResponseData) {
  return (
    <>
      {response.map((item: responseDataProps) => {
        return (
          <div key={item.id}>
            <p>{item.id}</p>
            <p>{item.name}</p>
            <p>{item.username}</p>
            <p>{item.email}</p>
            <span>------------------------</span>
          </div>
        );
      })}
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: {
      response: data,
    },
    revalidate: 10,
  };
};
