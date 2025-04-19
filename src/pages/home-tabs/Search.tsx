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
    // ... (keep your other quotes here)
  ];

  const backgroundStyle: React.CSSProperties = {
    background: 'linear-gradient(to right,rgb(150, 131, 104),rgb(239, 159, 133))',
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
