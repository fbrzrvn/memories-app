export const formatPostDate = (date) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthIndex = date.slice(6, 7) - 1;
  const month = months[monthIndex];
  const day = date.slice(8, 10);
  const year = date.slice(0, 4);
  return `${month} ${day}, ${year}`;
};

export const countReadingTime = (title, content) => {
  const totalTitleWords = title.split(" ").length;
  const totalDescriptionWords = content.split(",").length;
  const totalWords = totalTitleWords + totalDescriptionWords;
  const readingTime = totalWords / 200;
  return Math.ceil(readingTime);
};

export const foundExistingPostByTags = (tags, posts) => {
  const reccomendedPostByTag = [];
  posts.forEach((p) => {
    for (const tag of p.tags) {
      if (tags.includes(tag)) {
        const existingPost = reccomendedPostByTag.find(
          (rp) => rp._id === p._id,
        );
        !existingPost && reccomendedPostByTag.push(p);
      }
    }
  });
  return reccomendedPostByTag;
};
