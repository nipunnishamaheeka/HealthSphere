// MealPlaner

export interface Meal {
    type: string;
    time: string;
    items: string[];
    calories: number;
    protein: string;
    carbs: string;
    fat: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
    dailyCalorieGoal: number;
    meals: Meal[];
}

// ActivityTracker

export interface ActivityItem {
    id: string;
    type: string;
    duration: string;
    distance?: string;
    calories: number;
    time: string;
    date: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
    dailyCalorieTarget: number;
    weeklyActivityGoal: number;
    activities: ActivityItem[];
}

//GoalTracker

export interface Milestone {
    title: string;
    completed: boolean;
}

export interface Goal {
    id: number;
    title: string;
    category: string;
    target: string;
    progress: number;
    deadline: string;
    status: 'On Track' | 'Ahead' | 'Behind';
    milestones: Milestone[];
    createdAt: string;
}

export interface Achievement {
    id: string;
    title: string;
    description: string;
    icon: string;
    date: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
    streak: number;
    achievementPoints: number;
    goals: Goal[];
    achievements: Achievement[];
}

// EmergencyContact

export interface Contact {
    id: number;
    name: string;
    relationship: string;
    phone: string;
    email: string;
}

export interface ContactsState {
    contacts: Contact[];
    status: 'idle' | 'loading' | 'failed';
    error: string | null;
}

//HealthLogs

export interface HealthMetric {
    icon: any;
    label: string;
    value: string;
    trend: string;
    color: string;
}

export interface HealthLog {
    id: number;
    date: string;
    weight: string;
    bloodPressure: string;
    sleepHours: string;
    waterIntake: string;
}

export interface HealthFormData {
    weight: string;
    systolic: string;
    diastolic: string;
    sleepHours: string;
    waterIntake: string;
}

export interface HealthState {
    metrics: HealthMetric[];
    logs: HealthLog[];
    formData: HealthFormData;
    status: 'idle' | 'loading' | 'failed';
    error: string | null;
}

export interface RootState {
    health: HealthState;
}