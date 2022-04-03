import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { ParsedUrlQuery } from "querystring";

interface userProps {
  avatar_url: string;
  name: string;
}

interface IParams extends ParsedUrlQuery {
  login: string;
}

interface userData {
  user: userProps;
}

interface itemProps {
  login: string;
}

export default function Member({ user }: userData) {
  return (
    <>
      <Image src={user.avatar_url} alt="avatar url" width="100" height="100" />
      <h1>{user.name}</h1>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`https://api.github.com/users`);
  const data = await response.json();

  const paths = data.map((item: itemProps) => {
    return {
      params: { login: item.login.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { login } = context.params as IParams;

  const response = await fetch(`https://api.github.com/users/${login}`);
  const data = await response.json();

  return {
    props: {
      user: data,
    },
  };
};
