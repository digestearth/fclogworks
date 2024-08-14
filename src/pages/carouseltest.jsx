import { EmblaCarousel } from "../components/emblacarousel"

import kitchen_decks from "../data/bathroom_kitchen.json"

export function CarouselTest() {
  return (
    <>
      <div>
        <EmblaCarousel photos={kitchen_decks}/>
      </div>
    </>
  )
}
