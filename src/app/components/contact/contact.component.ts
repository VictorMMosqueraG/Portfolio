import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import emailjs from '@emailjs/browser';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { PortfolioOwner } from '../../models/skill.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  private fb = inject(FormBuilder);
  private dataService = inject(PortfolioDataService);

  owner!: PortfolioOwner;
  submitted = signal(false);
  sending = signal(false);
  error = signal('');

  form!: FormGroup;

  ngOnInit(): void {
    this.owner = this.dataService.getOwner();
    emailjs.init(environment.emailjs.publicKey);

    this.form = this.fb.group({
      name:    ['', [Validators.required, Validators.minLength(2)]],
      email:   ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  isInvalid(field: string): boolean {
    const control = this.form.get(field);
    return !!(control?.invalid && control?.touched);
  }

  async onSubmit(): Promise<void> {
    console.log('onSubmit ejecutado', this.form.value, 'valid:', this.form.valid);

    if (this.form.invalid) {
      console.log('Formulario inválido:', this.form.errors);
      this.form.markAllAsTouched();
      return;
    }

    this.sending.set(true);
    this.error.set('');

    const { name, email, subject, message } = this.form.value;

    console.log('EmailJS config:', {
      service: environment.emailjs.serviceId,
      template: environment.emailjs.templateId,
      key: environment.emailjs.publicKey,
    });

    try {
      const result = await emailjs.send(
        environment.emailjs.serviceId,
        environment.emailjs.templateId,
        {
          from_name:  name,
          from_email: email,
          subject:    subject,
          message:    message,
        }
      );
      console.log('EmailJS result:', result);
      this.submitted.set(true);
      this.form.reset();
    } catch (err: any) {
      console.error('EmailJS error completo:', err);
      this.error.set(err?.text || err?.message || 'Error al enviar. Intenta de nuevo.');
    } finally {
      this.sending.set(false);
    }
  }
}
