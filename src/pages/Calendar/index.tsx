//
import { useState, useRef, useEffect } from "react";
// calendar

// @mui
import {
  Card,
  Button,
  Container,
  DialogTitle,
  Stack,
  IconButton,
  Typography,
} from "@mui/material";
import useResponsive from "hooks/useResponsive";
import Page from "components/page";

import CalendarToolbar, {
  TCalendarView,
} from "components/calendar/CalendarToolbar";
// big calendar
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
// hooks
import moment from "moment";
import { CalendarStyle } from "components/calendar";
import Iconify from "components/iconify";
import { fDate } from "utils/formatTime";
// components

// sections

// ----------------------------------------------------------------------

export default function Calendar() {
  //   const { themeStretch } = useSettings();

  const isDesktop = useResponsive("up", "sm");
  const localizer = momentLocalizer(moment);
  const calendarRef = useRef<BigCalendar | null>(null);

  const [date, setDate] = useState(new Date());

  const [view, setView] = useState<TCalendarView>(isDesktop ? "month" : "week");

  //   const selectedEvent = useSelector(selectedEventSelector);

  //   const { events, isOpenModal, selectedRange } = useSelector(
  //     (state) => state.calendar
  //   );

  //   useEffect(() => {
  //     dispatch(getEvents());
  //   }, [dispatch]);

  useEffect(() => {
    // const calendarEl = calendarRef.current;
    // if (calendarEl) {
    //   const calendarApi = calendarEl.getApi();
    //   const newView = isDesktop ? "dayGridMonth" : "listWeek";
    //   calendarApi.changeView(newView);
    //   setView(newView);
    // }
  }, [isDesktop]);

  const handleClickToday = () => {
    // const calendarEl = calendarRef.current;
    // if (calendarEl) {
    //   const calendarApi = calendarEl.getApi();
    //   calendarApi.today();
    //   setDate(calendarApi.getDate());
    // }
  };

  const handleChangeView = (newView: any) => {};

  const handleClickMonthPrev = () => {};

  const handleClickMonthNext = () => {};

  const handleSelectRange = (arg: any) => {
    // const calendarEl = calendarRef.current;
    // if (calendarEl) {
    //   const calendarApi = calendarEl.getApi();
    //   calendarApi.unselect();
    // }
    // dispatch(selectRange(arg.start, arg.end));
  };

  const handleSelectEvent = (arg: any) => {
    // dispatch(selectEvent(arg.event.id));
  };

  const handleResizeEvent = async ({ event }: any) => {
    // try {
    //   dispatch(
    //     updateEvent(event.id, {
    //       allDay: event.allDay,
    //       start: event.start,
    //       end: event.end,
    //     })
    //   );
    // } catch (error) {
    //   console.error(error);
    // }
  };

  const handleDropEvent = async ({ event }: any) => {
    // try {
    //   dispatch(
    //     updateEvent(event.id, {
    //       allDay: event.allDay,
    //       start: event.start,
    //       end: event.end,
    //     })
    //   );
    // } catch (error) {
    //   console.error(error);
    // }
  };

  const handleAddEvent = () => {
    // dispatch(openModal());
  };

  const handleCloseModal = () => {
    // dispatch(closeModal());
  };

  return (
    <Page title="Calendar">
      <Container maxWidth={false}>
        <Card>
          <CalendarStyle>
            <BigCalendar
              view={view}
              localizer={localizer}
              events={[]}
              startAccessor="start"
              endAccessor="end"
              components={{
                toolbar: () => (
                  <CalendarToolbar
                    date={date}
                    view={view}
                    onNextMonth={handleClickMonthNext}
                    onPrevMonth={handleClickMonthPrev}
                    onToday={handleClickToday}
                    onChangeView={setView}
                  />
                ),
              }}
            />
          </CalendarStyle>
        </Card>

        {/* <DialogAnimate open={isOpenModal} onClose={handleCloseModal}>
          <DialogTitle>
            {selectedEvent ? "Edit Event" : "Add Event"}
          </DialogTitle>

          <CalendarForm
            event={selectedEvent || {}}
            range={selectedRange}
            onCancel={handleCloseModal}
          />

          
        </DialogAnimate> */}
      </Container>
    </Page>
  );
}
