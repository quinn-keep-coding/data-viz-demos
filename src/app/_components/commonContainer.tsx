type Props = {
  children?: React.ReactNode;
};

const CommonContainer = ({ children }: Props) => {
  return <div className="container mx-auto px-5">{children}</div>;
};

export default CommonContainer;
