const SectionHeader = ({ badge, title }) => {

  return (
    <div>
      {/* Badge */}
      <div className="flex items-center gap-2 my-2">
        <div className="w-6 h-0.5 bg-red-500"></div>
        <span className="text-red-500 text-xs font-semibold uppercase tracking-widest">
          {badge}
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-indigo-900 leading-tight py-2">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;