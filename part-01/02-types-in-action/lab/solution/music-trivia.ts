// -- SOLUTION --

/**
 * This function should return a string in the format:
 *
 *   QUESTION Answer: ANSWER
 */
function formatMusicTrivia(question: string, answer: string | number): string {
  if (question.includes('The Beatles')) {
    throw new Error("Question cannot contain 'The Beatles'!");
  }

  let formattedTrivia = '';

  formattedTrivia += question + ' Answer: ';

  if (typeof answer === 'number') {
    formattedTrivia += `**${answer}**`;
  } else {
    formattedTrivia += answer;
  }

  return formattedTrivia;
}

try {
  console.log(
    formatMusicTrivia(
      'What was the first music video aired on MTV?',
      "'Video Killed the Radio Star' by The Buggles"
    )
  );

  console.log(
    formatMusicTrivia(
      "How many times did The Beatles use the word 'love' in their songs?",
      613
    )
  );

  console.log(
    formatMusicTrivia(
      'In what year was the first song ever sung in a movie?',
      1927
    )
  );

  console.log(
    formatMusicTrivia(
      'What was the first CD ever pressed?',
      "'The Visitors' by ABBA"
    )
  );
} catch (error) {
  if (error instanceof Error) {
    console.error(error.message);
  }
}
