type PageProps = {
  params: {
    slug: string;
  };
};

const Page = ({ params }: PageProps) => {
  return <>{params.slug}</>;
};

export default Page;
