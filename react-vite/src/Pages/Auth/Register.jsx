import React from 'react';

export default function RegisterForm() {
  return (
    <form onSubmit={() => {}} noValidate>
      <div className="flex flex-col mx-auto md:w-96 w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="name" className="required">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            className="form-input"
            autoComplete="name"
            required
          />
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="email" className="required">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-input"
            autoComplete="email"
            required
          />
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="password" className="required">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            className="form-input"
            autoComplete="new-password"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password_confirmation" className="required">
            Confirm password
          </label>
          <input
            id="password_confirmation"
            name="password_confirmation"
            type="password"
            className="form-input"
            autoComplete="new-password"
            required
          />
        </div>

        <div className="border-t h-[1px] my-6"></div>

        <div className="flex flex-col gap-2">
          <button type="submit" className="btn btn-primary">Register</button>
        </div>
      </div>
    </form>
  );
}