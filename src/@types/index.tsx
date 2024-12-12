type ShiftType = 'caisse' | 'fermeture' | 'conge' | 'recuperation' | 'ouverture' | 'camion' | 'indisponible' | 'standard';

export type Shift = {
  id: string;
  assignee: string;
  type: ShiftType;
  pauseDuration: string;
  duration: string;
  startTime: string;
  endTime: string;
  day: string;
  wage: string;
}

type EmployeeStatus = 'étudiant' | 'Employee';

export type Employee = {
  id: string,
  name: string,
  status: EmployeeStatus,
  workingDayDuration: string,
  photo: string
}
