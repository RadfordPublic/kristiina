import React from 'react';
import './DashboardContainer.css';
import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCol,
    IonContent,
    IonGrid,
    IonItem,
    IonItemOption,
    IonItemOptions,
    IonItemSliding,
    IonLabel,
    IonList,
    IonRow,
    IonThumbnail
} from "@ionic/react";
import SparklineChart from "./SparklineChart";

interface DashboardProps {
    name: string;
}

const DashboardContainer: React.FC<DashboardProps> = () => {
    return (
        <IonContent>
            <IonGrid>
                <IonRow>
                    <IonCol size={"12"} size-sm="12">
                        <IonCard>
                            <IonCardHeader>
                                <IonCardTitle>Welcome</IonCardTitle>
                                <IonCardSubtitle>Demo</IonCardSubtitle>
                            </IonCardHeader>
                        </IonCard>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size={"12"} size-sm="6">
                        <IonCard>
                            <IonCardHeader>
                                <IonCardTitle>Jobs Feed</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <IonList>
                                    <IonItem>
                                        <IonThumbnail slot="start">
                                            <img alt={"model"}
                                                 src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw=="/>
                                        </IonThumbnail>
                                        <IonLabel>
                                            <h2>Need female model, ecommerce shoots</h2>
                                            <p>$300 AUD</p>
                                        </IonLabel>
                                        <IonButton fill="outline" slot="end">View</IonButton>
                                    </IonItem>
                                    <IonItem>
                                        <IonThumbnail slot="start">
                                            <img alt={"model"}
                                                 src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw=="/>
                                        </IonThumbnail>
                                        <IonLabel>
                                            <h2>Need female model, ecommerce shoots</h2>
                                            <p>$300 AUD</p>
                                        </IonLabel>
                                        <IonButton fill="outline" slot="end">View</IonButton>
                                    </IonItem>
                                    <IonItem>
                                        <IonThumbnail slot="start">
                                            <img alt={"model"}
                                                 src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw=="/>
                                        </IonThumbnail>
                                        <IonLabel>
                                            <h2>Need female model, ecommerce shoots</h2>
                                            <p>$300 AUD</p>
                                        </IonLabel>
                                        <IonButton fill="outline" slot="end">View</IonButton>
                                    </IonItem>
                                    <IonItem>
                                        <IonThumbnail slot="start">
                                            <img alt={"model"}
                                                 src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw=="/>
                                        </IonThumbnail>
                                        <IonLabel>
                                            <h2>Need female model, ecommerce shoots</h2>
                                            <p>$300 AUD</p>
                                        </IonLabel>
                                        <IonButton fill="outline" slot="end">View</IonButton>
                                    </IonItem>
                                    <IonItem>
                                        <IonThumbnail slot="start">
                                            <img alt={"model"}
                                                 src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw=="/>
                                        </IonThumbnail>
                                        <IonLabel>
                                            <h2>Need female model, ecommerce shoots</h2>
                                            <p>$300 AUD</p>
                                        </IonLabel>
                                        <IonButton fill="outline" slot="end">View</IonButton>
                                    </IonItem>
                                    <IonItem>
                                        <IonThumbnail slot="start">
                                            <img alt={"model"}
                                                 src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw=="/>
                                        </IonThumbnail>
                                        <IonLabel>
                                            <h2>Need female model, ecommerce shoots</h2>
                                            <p>$300 AUD</p>
                                        </IonLabel>
                                        <IonButton fill="outline" slot="end">View</IonButton>
                                    </IonItem>
                                    <IonItem>
                                        <IonThumbnail slot="start">
                                            <img alt={"model"}
                                                 src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw=="/>
                                        </IonThumbnail>
                                        <IonLabel>
                                            <h2>Need female model, ecommerce shoots</h2>
                                            <p>$300 AUD</p>
                                        </IonLabel>
                                        <IonButton fill="outline" slot="end">View</IonButton>
                                    </IonItem>
                                    <IonItem>
                                        <IonThumbnail slot="start">
                                            <img alt={"model"}
                                                 src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw=="/>
                                        </IonThumbnail>
                                        <IonLabel>
                                            <h2>Need female model, ecommerce shoots</h2>
                                            <p>$300 AUD</p>
                                        </IonLabel>
                                        <IonButton fill="outline" slot="end">View</IonButton>
                                    </IonItem>
                                    <IonItem>
                                        <IonThumbnail slot="start">
                                            <img alt={"model"}
                                                 src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw=="/>
                                        </IonThumbnail>
                                        <IonLabel>
                                            <h2>Need female model, ecommerce shoots</h2>
                                            <p>$300 AUD</p>
                                        </IonLabel>
                                        <IonButton fill="outline" slot="end">View</IonButton>
                                    </IonItem>
                                </IonList>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                    <IonCol size={"12"} size-sm="6">
                        <IonCard>
                            <IonCardHeader>
                                <IonCardTitle>Revenue History</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <SparklineChart/>
                            </IonCardContent>
                        </IonCard>
                        <IonCard>
                            <IonCardHeader>
                                <IonCardTitle>Message Box</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <IonList>
                                    <IonItemSliding>
                                        <IonItemOptions side="start">
                                            <IonItemOption color="danger" expandable>
                                                Delete
                                            </IonItemOption>
                                        </IonItemOptions>
                                        <IonItem>
                                            <IonThumbnail slot="start">
                                                <img alt={"model"}
                                                     src="https://www.formula1.com/content/fom-website/en/drivers/lewis-hamilton/_jcr_content/image.img.1920.medium.jpg/1610039131295.jpg"/>
                                            </IonThumbnail>
                                            <IonLabel>
                                                <h2>Lewis Hamilton</h2>
                                                <p>It's been great working with you</p>
                                            </IonLabel>
                                        </IonItem>
                                        <IonItemOptions side="end">
                                            <IonItemOption color="tertiary" expandable>
                                                Reply
                                            </IonItemOption>
                                        </IonItemOptions>
                                    </IonItemSliding>
                                    <IonItemSliding>
                                        <IonItemOptions side="start">
                                            <IonItemOption color="danger" expandable>
                                                Delete
                                            </IonItemOption>
                                        </IonItemOptions>
                                        <IonItem>
                                            <IonThumbnail slot="start">
                                                <img alt={"model"}
                                                     src="https://www.formula1.com/content/fom-website/en/drivers/daniel-ricciardo/_jcr_content/image.img.1920.medium.jpg/1602844653480.jpg"/>
                                            </IonThumbnail>
                                            <IonLabel>
                                                <h2>Daniel Ricciardo</h2>
                                                <p>can we grab a shoey soon?</p>
                                            </IonLabel>
                                        </IonItem>
                                        <IonItemOptions side="end">
                                            <IonItemOption color="primary" expandable>
                                                Reply
                                            </IonItemOption>
                                        </IonItemOptions>
                                    </IonItemSliding>
                                    <IonItemSliding>
                                        <IonItemOptions side="start">
                                            <IonItemOption color="danger" expandable>
                                                Delete
                                            </IonItemOption>
                                        </IonItemOptions>
                                        <IonItem>
                                            <IonThumbnail slot="start">
                                                <img alt={"model"}
                                                     src="https://www.formula1.com/content/fom-website/en/drivers/george-russell/_jcr_content/image.img.1920.medium.jpg/1602843440111.jpg"/>
                                            </IonThumbnail>
                                            <IonLabel>
                                                <h2>George Russell</h2>
                                                <p>I'll be able to afford it when i drive for mercedes</p>
                                            </IonLabel>
                                        </IonItem>
                                        <IonItemOptions side="end">
                                            <IonItemOption color="tertiary" expandable>
                                                Reply
                                            </IonItemOption>
                                        </IonItemOptions>
                                    </IonItemSliding>

                                </IonList>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size={"12"}>
                        <IonCard>
                            <IonCardHeader>
                                <IonCardTitle>Active Jobs Tracking</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <IonGrid>
                                    <IonRow>
                                        <IonCol size={"12"} sizeSm={"4"}>
                                            <img  alt={'profile'}
                                                src="https://imageresizer.static9.net.au/u6eeM0dVOsR_zuy4g2_1bLi8o0k=/400x0/https%3A%2F%2Fprod.static9.net.au%2Ffs%2Fc60eb62a-3848-4915-951a-ebe70242d81a"/>
                                            <IonCardHeader>
                                                <IonCardTitle>MAFS Reunion</IonCardTitle>
                                            </IonCardHeader>
                                            <IonCardContent>
                                                <IonLabel>
                                                    <p>wearing dress provided by Sportsgirl</p>
                                                </IonLabel>
                                            </IonCardContent>
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                </IonRow>
            </IonGrid>

        </IonContent>
    );
};

export default DashboardContainer;
