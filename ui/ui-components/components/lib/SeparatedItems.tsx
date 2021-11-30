import { Fragment } from "react";

interface Props {
  items?: React.ReactNode[];
  separator?: string;
}

const SeparatedItems: React.FC<Props> = ({ items, separator = " " }) => {
  if (!items?.length) {
    return null;
  }

  const lastIndex = items.length - 1;

  return (
    <>
      {items.map((item, idx) => (
        <Fragment key={`item_${idx}`}>
          {item}
          {separator && idx < lastIndex ? `${separator} ` : ""}
        </Fragment>
      ))}
    </>
  );
};

export default SeparatedItems;
