import React, {useState} from 'react';
import {
    IonButton,
    IonButtons,
    IonCard, IonCardContent,
    IonCardHeader, IonCardTitle,
    IonCol,
    IonContent, IonDatetime,
    IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton,
    IonRow, IonSelect, IonSelectOption, IonToolbar,
} from '@ionic/react';
import {star} from "ionicons/icons";

const Tab4: React.FC = () => {

    const [firstName, setFirstName] = useState<string>();
    const [lastName, setLastName] = useState<string>();
    const [selectedDate, setSelectedDate] = useState<string>();
    const [employment, setEmployment] = useState<string>('influencer');
    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton/>
                    </IonButtons>
                    <img alt={'profile'} style={{
                        display: "block",
                        marginLeft: "0",
                        marginRight: "0",
                        height: "100px",
                        width: "200px",
                    }}
                         src="https://i.imgur.com/o1cmaC7.jpg"/>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid style={{marginBottom: '100px'}}>
                    <IonRow>
                        <IonCol size={"12"}>
                            <IonCard>
                                <IonCardContent>
                                    <IonGrid>
                                        <IonRow>
                                            <IonCol size={"12"}>
                                                <img alt={'profile'} style={{
                                                    display: "block",
                                                    marginLeft: "0",
                                                    marginRight: "0",
                                                }}
                                                     src="https://i.imgur.com/dnfl8f1.jpg"/>
                                            </IonCol>
                                        </IonRow>
                                    </IonGrid>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size={"12"} size-sm="6">
                            <IonCard>
                                <IonCardHeader>
                                    <IonCardTitle>Sign up</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <IonItem>
                                        <IonInput value={firstName} placeholder="Fist Name" onIonChange={e => setFirstName(e.detail.value!)}/>
                                    </IonItem>
                                    <IonItem>
                                        <IonInput value={lastName} placeholder="Last Name" onIonChange={e => setLastName(e.detail.value!)}/>
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel>Birthday</IonLabel>
                                        <IonDatetime displayFormat="DD MMM YYYY" placeholder="Select Date" value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}/>
                                    </IonItem>

                                    <IonItem>
                                        <IonInput value={lastName} placeholder="Email" onIonChange={e => setLastName(e.detail.value!)}/>
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel>Employment Type</IonLabel>
                                        <IonSelect value={employment} okText="Okay" cancelText="Dismiss" onIonChange={e => setEmployment(e.detail.value)}>
                                            <IonSelectOption value="influencer">Influencer</IonSelectOption>
                                            <IonSelectOption value="photographer">Photographer</IonSelectOption>
                                            <IonSelectOption value="gamer">Gamer</IonSelectOption>
                                            <IonSelectOption value="f1">Formula 1 Driver</IonSelectOption>
                                        </IonSelect>
                                    </IonItem>
                                    <IonButton fill="outline">Submit <IonIcon slot="end" icon={star} /></IonButton>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol size={"12"} size-sm="6">
                            <IonCard>
                                <IonCardHeader>
                                    <IonCardTitle>Our Partners</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <img alt={'partners'} style={{
                                        display: "block",
                                        marginLeft: "0",
                                        marginRight: "0",
                                    }}
                                         src="https://i.imgur.com/DX11VMi.png"/>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </>
    );
};

export default Tab4;
