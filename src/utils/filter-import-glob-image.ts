export const filterImportGlobImage = (string: string, data: [string, ImageMetadata][]) => {
    return data
        .filter(([src, _]) => {
            const fileName = src.split("/").pop()?.replace(".jpg", "");
            return fileName.includes(string);
        })
        .sort(([a], [b]) => {
            const getNum = (p: string) => Number(p.match(/(\d+)/)?.[1] ?? 0);

            return getNum(a) - getNum(b);
        })
        .map(([_, imgData]) => imgData);
};
