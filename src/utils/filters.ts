export const filterImport = (nameFile: string, datas: [string, any][]) => {
    return datas
        .filter(([src, _]) => {
            const fileName = src.split("/").pop()?.replace(".jpg", "");
            return fileName.includes(nameFile);
        })
        .sort(([a], [b]) => {
            const getNum = (p: string) => Number(p.match(/(\d+)/)?.[1] ?? 0);

            return getNum(a) - getNum(b);
        })
        .map(([_, imgData]) => imgData);
};
