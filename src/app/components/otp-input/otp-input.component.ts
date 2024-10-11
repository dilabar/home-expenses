import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-otp-input',
  standalone: true,
  templateUrl: './otp-input.component.html',
  styleUrls: ['./otp-input.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class OtpInputComponent implements OnInit {
  @Input() numberOfDigits: number = 6; // Total number of digits in OTP
  @Output() otpComplete: EventEmitter<string> = new EventEmitter<string>();
  otp: string[] = [];

  ngOnInit(): void {
    this.otp = Array(this.numberOfDigits).fill(''); // Initialize OTP array
  }

  onInput(event: Event, index: number): void {
    const inputElement = event.target as HTMLInputElement;
    const inputValue = inputElement.value;

    // If input contains more than one character, only take the first one
    if (inputValue.length > 1) {
      inputElement.value = inputValue.charAt(0); // Ensure only one character is displayed
    }

    // Validate input as a single digit
    if (/^[0-9]$/.test(inputValue)) {
      this.otp[index] = inputValue.charAt(0); // Store the entered digit

      // Emit OTP complete event if all digits are filled
      if (this.otp.every(digit => digit)) {
        this.otpComplete.emit(this.otp.join(''));
      }

      // Move to the next input if not the last input
      if (index < this.numberOfDigits - 1) {
        this.focusNextInput(index);
      }
    } else {
      inputElement.value = ''; // Clear input if it's not a valid digit
    }
  }
  onFocus(index: number): void {
    // Clear the current input field when it gains focus
    this.otp[index] = '';
  }

  onPaste(event: ClipboardEvent): void {
    const clipboardData = event.clipboardData?.getData('text') || '';
    if (clipboardData.length === this.numberOfDigits && /^[0-9]+$/.test(clipboardData)) {
      this.otp = clipboardData.split('');
      this.otpComplete.emit(this.otp.join('')); // Emit OTP complete on paste
    }
  }

  onKeyDown(event: KeyboardEvent, index: number): void {
    if (event.key === 'Backspace') {
      if (index === this.numberOfDigits - 1) {
        // If the user is at the last index, just clear it
        if (this.otp[index]) {
          this.otp[index] = ''; // Clear last input value
        } else {
          this.focusPrevInput(index); // Move to the previous input field
        }
      } else {
        // In any other input, jump to the last input field
        const lastInput = document.getElementsByName('otpInput')[this.numberOfDigits - 1] as HTMLInputElement;
        if (lastInput) {
          lastInput.focus(); // Jump to the last input field
        }
      }
    } else if (event.key === 'ArrowRight' && index < this.numberOfDigits - 1) {
      // Move to the next input if the right arrow is pressed
      this.focusNextInput(index);
    } else if (event.key === 'ArrowLeft' && index > 0) {
      // Move to the previous input if the left arrow is pressed
      this.focusPrevInput(index);
    }
  }
  

  private focusNextInput(index: number): void {
    const nextInput = document.getElementsByName('otpInput')[index + 1] as HTMLInputElement;
    if (nextInput) {
      nextInput.focus();
    }
  }

  private focusPrevInput(index: number): void {
    const prevInput = document.getElementsByName('otpInput')[index - 1] as HTMLInputElement;
    if (prevInput) {
      prevInput.focus();
    }
  }
}
