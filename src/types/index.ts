export interface FilePickerOptions {
  fileType: "image" | "video" | "pdf" | "all";
}

export interface FilePickerResult {
  uri: string;
  file: File;
}

export interface SignUpForm {
  name: string;
  email: string;
  password: string;
}
export interface CreateProjectForm {
  name: string;
  description: string;
  payment_method?: string;
  plan_id: number;
  stripe_price_id: string;
}
