import React from 'react';
import {
    IonButton,
    IonCard, IonCardContent,
    IonCardHeader, IonCardSubtitle, IonCardTitle,
    IonCol,
    IonContent,
    IonGrid, IonIcon, IonItem, IonLabel, IonList,
    IonRow, IonThumbnail,
} from '@ionic/react';
import AudienceChart from "../components/AudienceChart";
import {
    apertureSharp,
    briefcaseSharp,
    logoAmazon,
    logoApple,
    logoDiscord,
    logoPlaystation,
    logoTwitter
} from "ionicons/icons";

const Tab2: React.FC = () => {
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
                          </IonCardContent>
                      </IonCard>
                  </IonCol>
              </IonRow>
              <IonRow>
                  <IonCol size={"6"}>
                      <IonCard>
                          <IonCardHeader>
                              <IonCardTitle>Audience Growth</IonCardTitle>
                          </IonCardHeader>
                          <IonCardContent>
                              <AudienceChart/>
                          </IonCardContent>
                      </IonCard>
                  </IonCol>
                  <IonCol size={"6"}>
                      <IonCard>
                          <IonCardHeader>
                              <IonCardTitle>Key Statistics</IonCardTitle>
                          </IonCardHeader>
                          <IonCardContent>
                              <IonList>
                                  <IonItem>
                                          <IonIcon icon={apertureSharp} />
                                      <IonLabel>
                                          <h1>&nbsp;&nbsp;&nbsp;&nbsp;45%</h1>
                                          <h2>&nbsp;&nbsp;&nbsp;&nbsp;Engagement Rate</h2>
                                      </IonLabel>
                                  </IonItem>
                                  <IonItem>
                                      <IonIcon icon={apertureSharp} />
                                      <IonLabel>
                                          <h1>&nbsp;&nbsp;&nbsp;&nbsp;20k</h1>
                                          <h2>&nbsp;&nbsp;&nbsp;&nbsp;Authentic engagement per post</h2>
                                      </IonLabel>
                                  </IonItem>
                                  <IonItem>
                                      <IonIcon icon={apertureSharp} />
                                      <IonLabel>
                                          <h1>&nbsp;&nbsp;&nbsp;&nbsp;Health</h1>
                                          <h2>&nbsp;&nbsp;&nbsp;&nbsp;Influencer key sector</h2>
                                      </IonLabel>
                                  </IonItem>
                                  <IonItem>
                                      <IonIcon icon={apertureSharp} />
                                      <IonLabel>
                                          <h1>&nbsp;&nbsp;&nbsp;&nbsp;United States</h1>
                                          <h2>&nbsp;&nbsp;&nbsp;&nbsp;Influencer main audience base</h2>
                                      </IonLabel>
                                  </IonItem>
                              </IonList>
                          </IonCardContent>
                      </IonCard>
                  </IonCol>
              </IonRow>
              <IonRow>
                  <IonCol size={"6"}>
                      <IonCard>
                          <IonCardHeader>
                              <IonCardTitle>Audience Brand affinity</IonCardTitle>
                          </IonCardHeader>
                          <IonCardContent>
                              <IonList>
                                  <IonItem>
                                      <IonIcon icon={logoAmazon}/>
                                      <IonLabel>
                                          <h1 style={{textAlign: "right"}}>&nbsp;&nbsp;&nbsp;&nbsp;Amazon  20%</h1>
                                      </IonLabel>
                                  </IonItem>
                                  <IonItem>
                                      <IonIcon icon={logoApple}/>
                                      <IonLabel>
                                          <h1 style={{textAlign: "right"}}>&nbsp;&nbsp;&nbsp;&nbsp;Apple inc  13%</h1>
                                      </IonLabel>
                                  </IonItem>
                                  <IonItem>
                                      <IonIcon icon={logoDiscord}/>
                                      <IonLabel>
                                          <h1 style={{textAlign: "right"}}>&nbsp;&nbsp;&nbsp;&nbsp;Discord  13%</h1>
                                      </IonLabel>
                                  </IonItem>
                                  <IonItem>
                                      <IonIcon icon={logoPlaystation}/>
                                      <IonLabel>
                                          <h1 style={{textAlign: "right"}}>&nbsp;&nbsp;&nbsp;&nbsp;Playstation  11%</h1>
                                      </IonLabel>
                                  </IonItem>
                                  <IonItem>
                                      <IonIcon icon={logoTwitter}/>
                                      <IonLabel>
                                          <h1 style={{textAlign: "right"}}>&nbsp;&nbsp;&nbsp;&nbsp;Twitter  40%</h1>
                                      </IonLabel>
                                  </IonItem>
                              </IonList>
                          </IonCardContent>
                      </IonCard>
                  </IonCol>
              </IonRow>
          </IonGrid>
      </IonContent>
  );
};

export default Tab2;
