import { IAnimeFullData } from "../../../types/anime.types";

type TypeProps = {
  animeCardInfo: IAnimeFullData;
};

export default function AnimeRelations({ animeCardInfo }: TypeProps) {
  return (
    <section className="flex flex-col">
      <p className="text-2xl pb-3 border-b-[1px]">Relations</p>
      <div className="flex gap-x-4 mt-6 h-52 overflow-x-scroll">
        {animeCardInfo.relations.map((relation, i) => (
          <div key={i}>
            <h2 className="text-xl mb-2">{relation.relation}</h2>
            <div className="flex gap-x-4">
              {relation.entry.map((item) => (
                <div key={item.mal_id} className="flex h-36">
                  <div className="flex w-24 h-full *:block text-sm p-1 bg-black/60">
                    <p>
                      There should be a picture here, but the API doesn't
                      provide them.
                    </p>
                  </div>
                  <div className="px-3 w-72 text-sm">
                    <a
                      className="text-base  underline"
                      href={`/anime/${item.mal_id}`}
                    >
                      {item.name}
                    </a>
                    <p>{relation.relation}</p>
                    <p>{item.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
