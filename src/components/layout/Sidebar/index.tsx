import Navbar from "./Navbar";

export default function Sidebar() {
  const profileImageMarkup = (
    <div className="size-10 overflow-hidden rounded-full">
      <img
        src="https://lh3.googleusercontent.com/a/ACg8ocI-8UYSU8XE0oska2ZG5kw3XotfgrZfS8kXQWJdncPezmef8UeF=s96-c"
        alt="Profile"
      />
    </div>
  );

  const logoMarkup = <p className="grow text-3xl font-bold ">Monica</p>;

  return (
    <div className="flex h-screen w-3/12 flex-col bg-[#ececee] pt-7">
      <div className="flex  w-full items-center  px-8">
        {logoMarkup}
        {profileImageMarkup}
      </div>
      <Navbar />
    </div>
  );
}
