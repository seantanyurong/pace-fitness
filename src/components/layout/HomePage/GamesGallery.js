function GamesGallery() {
  const featureList = [
    {
      text: "Thank you for making such a ",
      highlightedText: "wholesome community",
      textFirst: true,
    },
    {
      text: "",
      highlightedText: "A safe space 💕",
      textFirst: false,
    },
    {
      text: "Wow, ",
      highlightedText: "this group is so great",
      textFirst: true,
    },
    {
      text: "Thank you for ",
      highlightedText: "spreading love and positivity to all of us <33",
      textFirst: true,
    },
    {
      text: " whether we’re active or inactive!!💓",
      highlightedText: "You’ve touched all of us,",
      textFirst: false,
    },
    {
      text: "I used to only use the treadmill",
      highlightedText: "",
      textFirst: true,
    },
    {
      text: "Learn a lot of different exercises",
      highlightedText: "",
      textFirst: true,
    },
    {
      text: "Blessed to ",
      highlightedText: "be part of this community",
      textFirst: true,
    },
    {
      text: "If you're woman, ",
      highlightedText: "you need to be a part of this",
      textFirst: true,
    },
    {
      text: " group of people",
      highlightedText: "Really encouraging",
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
