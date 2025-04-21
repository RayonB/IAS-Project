import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from '@ionic/react';

import React from 'react';

function Search() {
  const funnyQuotes = [
    {
      title: "Procrastination Level: Expert",
      subtitle: "“Due tomorrow? Do tomorrow.”",
      content: "They say never put off what you can do today... so I scheduled it for next week instead.",
      color: "medium",
      button: "Relatable",
    },
    {
      title: "Final Exam Vibes",
      subtitle: "“I studied everything… except what was on the test.”",
      content: "At this point, I'm just praying the professor curves the grade to match my vibes.",
      color: "warning",
      button: "I Feel That",
    },
    {
      title: "Group Projects Be Like",
      subtitle: "“We’re all in this together — except for you.”",
      content: "One does the work, two do nothing, and one disappears like a magician.",
      color: "danger",
      button: "Too Real",
    },
    {
      title: "Night Owl Struggles",
      subtitle: "“Sleep is for the weak… or the well-organized.”",
      content: "I only study at night because that’s when the panic kicks in.",
      color: "dark",
      button: "Night Mode On",
    },
    {
      title: "Accidental Genius",
      subtitle: "“I didn’t study, but somehow passed.”",
      content: "Sometimes the universe just gives you a ‘W’ for vibes.",
      color: "success",
      button: "Lucky Me",
    },
  ];

  const backgroundStyle: React.CSSProperties = {
    backgroundImage: `
      linear-gradient(to right, rgba(150, 131, 104, 0.9), rgba(239, 159, 133, 0.9)),
      url('https://www.transparenttextures.com/patterns/cubes.png')
    `,
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat',
    minHeight: '100vh',
    padding: '16px',
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Student Humor</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen style={backgroundStyle}>
        {funnyQuotes.map((quote, index) => (
          <IonCard color="light" key={index}>
            <IonCardHeader>
              <IonCardTitle>{quote.title}</IonCardTitle>
              <IonCardSubtitle>{quote.subtitle}</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>{quote.content}</IonCardContent>
            <IonButton expand="block" fill="outline" color={quote.color}>
              {quote.button}
            </IonButton>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
}

export default Search;
