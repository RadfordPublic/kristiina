import React from 'react';
import {
    IonCard, IonCardContent,
    IonCardHeader, IonCardTitle,
    IonCol,
    IonContent,
    IonGrid, IonLabel,
    IonRow,
} from '@ionic/react';

const Tab4: React.FC = () => {
    return (
        <IonContent>
            <IonGrid>
                <IonRow>
                    <IonCol size={"12"}>
                        <IonCard>
                            <IonCardContent>
                                <IonGrid>
                                    <IonRow>
                                        <IonCol size={"3"}>
                                            <img alt={'profile'} style={{
                                                display: "block",
                                                marginLeft: "auto",
                                                marginRight: "auto",
                                                height: "150px",
                                                width: "150px",
                                                borderRadius: "50%",
                                            }}
                                                 src="https://s.yimg.com/ny/api/res/1.2/79yF4GQkOFYdSQZ4eBgqEw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTExOTguOA--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2020-08/45a57320-e014-11ea-9a96-395aac96b517"/>
                                        </IonCol>
                                        <IonCol size={"9"}>
                                            <IonLabel>
                                                <h1>Martha Kalifatidis</h1>
                                                <h2>@marthaa__k</h2>
                                                <br/>
                                                <p> 870 posts 430k followers 1,581 following</p>
                                            </IonLabel>
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
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
