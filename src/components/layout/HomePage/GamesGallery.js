function GamesGallery() {
  const featureList = [
    {
      text: "for tabletop gamers",
      highlightedText: "Regular events and tournaments",
      textFirst: false,
    },
    {
      text: "",
      highlightedText: "Magic the Gathering",
      textFirst: true,
    },
    {
      text: "",
      highlightedText: "High speed internet",
      textFirst: true,
    },
    {
      text: "for individuals or teams",
      highlightedText: "Private rooms",
      textFirst: false,
    },
    {
      text: "for remote workers",
      highlightedText: "Comfortable and productive workspaces",
      textFirst: false,
    },
    {
      text: "gaming tables",
      highlightedText: "Warhammer",
      textFirst: false,
    },
    {
      text: "",
      highlightedText: "Dungeons and Dragons",
      textFirst: false,
    },
    {
      text: "",
      highlightedText: "Private and exclusive community",
      textFirst: false,
    },
    {
      text: "",
      highlightedText: "Lounge area for socialising",
      textFirst: false,
    },
    {
      text: "Opportunities for",
      highlightedText: "networking and collaboration",
      textFirst: true,
    },
    {
      text: "Inhouse",
      highlightedText: "Dungeon Master",
      textFirst: true,
    },
    {
      text: "",
      highlightedText: "Private restaurant and chef",
      textFirst: false,
    },
    {
      text: "",
      highlightedText: "Collection of board games, playmats and dice",
      textFirst: true,
    },
    {
      text: "",
      highlightedText: "Miniature painting setup",
      textFirst: true,
    },
    {
      text: "",
      highlightedText: "Monitors for designers and coders",
      textFirst: true,
    },
    {
      text: "for your cards and miniatures",
      highlightedText: "Inhouse storage",
      textFirst: false,
    },
    {
      text: "for comfort",
      highlightedText: "Herman Miller chairs",
      textFirst: false,
    },
    {
      text: "for easy access",
      highlightedText: "Convenient location",
      textFirst: false,
    },
  ];

  const renderFeatures = () => {
    const rows = [];
    for (let i = 0; i < featureList.length; i += 2) {
      const feature1 = featureList[i];
      const feature2 = featureList[i + 1];
      rows.push(
        <div className="flex gap-2 md:gap-3 justify-center mb-2 md:mb-3">
          <div className="w-full shrink bg-highlight-eggshell p-4 rounded-md rounded-l-none"></div>
          <p className="shrink-0 border-highlight-darkEggshell shadow-highlight-eggshell border-2 px-3 p-1 md:p-4 rounded-md text-sm md:text-2xl font-bold text-text-main">
            {feature1.textFirst ? (
              <>
                "{feature1.text}{" "}
                <mark className="bg-highlight-yellow">
                  {feature1.highlightedText}
                </mark>
                ."
              </>
            ) : (
              <>
                "
                <mark className="bg-highlight-yellow">
                  {feature1.highlightedText}
                </mark>{" "}
                {feature1.text}
                ."
              </>
            )}
          </p>
          <p className="shrink-0 border-highlight-darkEggshell shadow-highlight-eggshell border-2 px-3 p-1 md:p-4 rounded-md text-sm md:text-2xl font-bold text-text-main">
            {feature2.textFirst ? (
              <>
                "{feature2.text}{" "}
                <mark className="bg-highlight-yellow">
                  {feature2.highlightedText}
                </mark>
                ."
              </>
            ) : (
              <>
                "
                <mark className="bg-highlight-yellow">
                  {feature2.highlightedText}
                </mark>{" "}
                {feature2.text}
                ."
              </>
            )}
          </p>
          <div className="w-full shrink bg-highlight-eggshell p-4 rounded-md rounded-r-none"></div>
        </div>
      );
    }
    return rows;
  };

  return <section className="mt-16">{renderFeatures()}</section>;
}

export default GamesGallery;
