# How to Edit Membership Meeting Events

The membership meeting events are now fully editable through PageCMS!

## Editing via PageCMS (Recommended)

1. Go to your PageCMS dashboard at: **https://pagescms.org**
2. Navigate to the **Events** collection
3. Find the event you want to edit:
   - `December 2025 Holiday Party`
   - `January 2026 General Membership Meeting`
4. Click on the event to edit
5. Update any of the following fields:
   - **Title**: Event name
   - **Description**: Short description
   - **Event Date**: Date of the event (YYYY-MM-DD format)
   - **Event Time**: Time (e.g., "7:00 PM")
   - **Location**: Where it's held
   - **Featured**: Toggle to show in Featured Events
   - **Content**: Full event details (markdown format)
6. Save your changes
7. Changes will appear on the website after the next build

## Event Files Location

The events are stored as markdown files in:
```
src/content/events/
├── december-2025-holiday-party.mdx
├── january-2026-membership-meeting.mdx
└── ... other events
```

## Adding New Monthly Meetings

To add a new membership meeting:

1. In PageCMS, go to Events → **New Event**
2. Fill in the details:
   - **Title**: "[Month] [Year] General Membership Meeting"
   - **Event Date**: Last Thursday of the month (unless otherwise noted)
   - **Event Time**: "7:00 PM"
   - **Location**: "Kisling's Tavern (Upstairs)"
   - **Featured**: ✅ Check this to show prominently
3. In the content area, add details about what will be discussed
4. Save and publish

## Meeting Schedule Information

The general schedule information (last Thursday of each month at Kisling's Tavern) is displayed automatically on the Events page. You only need to create/edit specific upcoming meeting events.

## Tips

- Mark meetings as **Featured** to show them in the Featured Events section
- The events page automatically sorts by date
- Past events are automatically moved to the "Past Events" section
- Update the `isPast` field to `true` after a meeting has occurred (or let the system do this automatically based on the date)

## Questions?

If you need help editing events, contact your web administrator or refer to the PageCMS documentation at https://pagescms.org/docs
