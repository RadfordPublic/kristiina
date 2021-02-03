import React from 'react';
import {
    IonCard, IonCardContent,
    IonCardHeader, IonCardTitle,
    IonCol,
    IonContent,
    IonGrid, IonItem, IonLabel,
    IonRow, IonThumbnail,
} from '@ionic/react';

const Tab4: React.FC = () => {
  return (
      <IonContent>
          <IonGrid>
              <IonRow>
                  <IonCol size={"12"}>
                      <IonCard>
                          <IonCardHeader>
                              <IonCardTitle>Martha Kalifatidis @marthaa__k</IonCardTitle>
                          </IonCardHeader>
                          <IonCardContent>
                              <IonItem>
                                  <IonThumbnail slot="start">
                                      <img alt={"model"}
                                           src="https://s.yimg.com/ny/api/res/1.2/79yF4GQkOFYdSQZ4eBgqEw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTExOTguOA--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2020-08/45a57320-e014-11ea-9a96-395aac96b517"/>
                                  </IonThumbnail>
                                  <IonLabel>
                                      <p> 870 posts 430k followers 1,581 following</p>
                                  </IonLabel>
                              </IonItem>
                              {/*<IonButton*/}
                              {/*    expand="full"*/}
                              {/*    onClick={() => history.push("/page/Profile/tabs/tab1-detail")}*/}
                              {/*>*/}
                              {/*    NEXT PAGE*/}
                              {/*</IonButton>*/}
                          </IonCardContent>
                      </IonCard>
                  </IonCol>
              </IonRow>
              <IonRow>
                  <IonCol size={"6"}>
                      <IonCard>
                          <IonCardHeader>
                              <IonCardTitle>Banking</IonCardTitle>
                          </IonCardHeader>
                          <IonCardContent>
                          </IonCardContent>
                      </IonCard>
                  </IonCol>
              </IonRow>
          </IonGrid>
      </IonContent>
  );
};

export default Tab4;
