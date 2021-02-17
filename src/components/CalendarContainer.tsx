import React from 'react';
import './DashboardContainer.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";
import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCol,
    IonContent,
    IonGrid,
    IonRow
} from "@ionic/react";

interface CalendarProps {
    name: string;
}

const CalendarContainer: React.FC<CalendarProps> = () => {
    const localizer = momentLocalizer(moment);
    return (
        <IonContent>
            <IonGrid>
                <IonRow>
                    <IonCol size={"12"}>
                        <IonCard>
                            <IonCardContent>
                                <IonCardHeader>
                                    <IonCardTitle  style={{textAlign: "center"}}>Programs</IonCardTitle>
                                </IonCardHeader>
                                <Calendar
                                    localizer={localizer}
                                    events={[{start: moment(), end : moment().add(1, "days"), title: "booked"}]}
                                    defaultDate={new Date()}
                                    defaultView="month"
                                    style={{ height: "100vh" }}
                                />
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    );
};

export default CalendarContainer;
