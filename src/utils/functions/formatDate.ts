import { format, parseISO } from 'date-fns';

export default function formatDate(rawDate: string): string {
	const date = parseISO(rawDate);

	const formattedDate = format(date, 'iii, d LLL');

	return formattedDate;
}
