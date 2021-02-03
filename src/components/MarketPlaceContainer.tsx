import React from 'react';
import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCol,
    IonContent,
    IonGrid,
    IonLabel,
    IonRow,
} from "@ionic/react";

interface MarketPlaceProps {
    name: string;
}

const MarketPlaceContainer: React.FC<MarketPlaceProps> = () => {
    return (
        <IonContent>
            <IonGrid>
                <IonRow>
                    <IonCol size={"4"}>
                        <IonCard>
                            <img src="https://s3-us-west-2.amazonaws.com/api.starngage.media.profile/95663585_540325533576267_7623299936578174976_n.jpg" />
                            <IonCardHeader>
                                <IonCardTitle>@oliviabowen</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <IonLabel>
                                    <p>📩 👑Ambassador for W7, Skin Republic, Batiste, Eleventh Hour Beauty 👗 In The Style @thebowenhome @exemptsociety</p>
                                </IonLabel>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                    <IonCol size={"4"}>
                        <IonCard>
                            <img src="https://s3-us-west-2.amazonaws.com/api.starngage.media.profile/58603067_608959932919285_4220525849083904000_n.jpg" />
                            <IonCardHeader>
                                <IonCardTitle>@piamuehlenbeck</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <IonLabel>
                                    <p>➖ Founder and CEO of @slinkii ➖ Enquiries: ➖ Currently driving around Australia in my Tesla:</p>
                                </IonLabel>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                    <IonCol size={"4"}>
                        <IonCard>
                            <img src="https://s3-us-west-2.amazonaws.com/api.starngage.media.profile/95663585_540325533576267_7623299936578174976_n.jpg" />
                            <IonCardHeader>
                                <IonCardTitle>@oliviabowen</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <IonLabel>
                                    <p>📩 👑Ambassador for W7, Skin Republic, Batiste, Eleventh Hour Beauty 👗 In The Style @thebowenhome @exemptsociety</p>
                                </IonLabel>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                    <IonCol size={"4"}>
                        <IonCard>
                            <img src="https://s3-us-west-2.amazonaws.com/api.starngage.media.profile/117796277_2619084321641943_5969822127587634329_n.jpg" />
                            <IonCardHeader>
                                <IonCardTitle>@stephclairesmith</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <IonLabel>
                                    <p>Co founder of @sodashades 😎@midnightco & @keepitcleaner 👈🏼WORKOUT WITH ME 👇🏼💪🏼</p>
                                </IonLabel>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                </IonRow>
            </IonGrid>

        </IonContent>
    );
};

export default MarketPlaceContainer;
