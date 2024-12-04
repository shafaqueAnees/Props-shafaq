const BgColor = (props: any) => {
    return (
      <div className={`p-4 ${props.bgclr}`}>
        Tailwind Background Class: {props.bgclr}
      </div>
    );
  };
  export default BgColor;
  