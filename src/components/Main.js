import React, { useState, useEffect, useCallback } from 'react';
import IndividualSetGathering from './IndividualSetGathering';

function Main() {
  const [gatheringOfSet, setGatheringOfSet] = useState([]);
  const [gatheringOfCards, setGatheringOfCards] = useState([]);

  const fetchSetGatherings = useCallback(async () => {
    const response = await fetch('https://api.magicthegathering.io/v1/sets');
    if (!response.ok) {
      throw new Error('Something went wrong !');
    }
    const data = await response.json();
    const results = data.sets;
    const loadedSets = [];

    for (const key in results) {
      loadedSets.push({
        id: key,
        code: results[key].code,
        name: results[key].name,
        type: results[key].type,
        booster: results[key].booster,
        releaseDate: results[key].releaseDate,
        block: results[key].block,
        onlineOnly: results[key].onlineOnly,
      });
    }
    setGatheringOfSet(loadedSets);
  }, []);
  const fetchCardsGatherings = useCallback(async () => {
    const response = await fetch('https://api.magicthegathering.io/v1/cards');
    if (!response.ok) {
      throw new Error('Something went wrong !');
    }
    const data = await response.json();
    const results = data.cards;
    const loadedCards = [];

    for (const key in results) {
      loadedCards.push({
        id: results[key].id,
        set: results[key].set,
        setName: results[key].setName,
        name: results[key].name,
        colors: results[key].colors,
        imageUrl: results[key].imageUrl,
        artist: results[key].artist,
      });
    }
    setGatheringOfCards(loadedCards);
  }, []);

  useEffect(() => {
    fetchSetGatherings();
    fetchCardsGatherings();
  }, [fetchSetGatherings])

  return (
    <IndividualSetGathering gatherings={gatheringOfSet} gatheringOfCards={gatheringOfCards} />
  );
}

export default Main;
