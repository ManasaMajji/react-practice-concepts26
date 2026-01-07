export default function ConditionalRenderingDemo({ isLoggedin }) {
  //   if (isLoggedin) {
  //     return <div>User is logged In</div>;
  //   } else {
  //     return <div>User is not logged In</div>;
  //   } (OR)

  return (
    <div>
      Conditionally rendered:
      {isLoggedin ? "User is logged In" : "User is not logged In"}
    </div>
  );
}
