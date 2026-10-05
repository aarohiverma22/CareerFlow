interface HeaderProps {
  username?: string;
}

const Header = ({ username = "" }: HeaderProps) => {
  const getInitials = (name: string) => {
    const words = name.trim().split(/\s+/).filter(Boolean);
    if (words.length === 0) return "";
    if (words.length === 1) {
      return words[0].charAt(0).toUpperCase();
    }
    return (
      words[0].charAt(0) + words[words.length - 1].charAt(0)
    ).toUpperCase();
  };
  const initials = getInitials(username);

  return (
    <header className="flex h-20 w-full items-center justify-between border-b border-[#E5E7EB] bg-white px-5 md:px-8">
      {/* Welcome */}
      <div>
        <h1 className="text-xl font-semibold text-[#1D1F23] md:text-2xl">
          Welcome, {username || "User"}
        </h1>
      </div>

      {/* User Initials */}
      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#EEF2FF] text-sm font-semibold text-[#4F46E5] md:size-11 md:text-base">
        {initials || "U"}
      </div>
    </header>
  );
};

export default Header;
