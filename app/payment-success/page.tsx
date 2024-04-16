"use client"

import React from 'react';
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5';

import EmptyState from '../components/EmptyState';
import ClientOnly from '../components/ClientOnly';
import getCurrentUser from '../actions/getCurrentUser';
import { Button } from '@/app/components/Button';
import { useRouter } from 'next/navigation';

const PaymentSuccessPage = async () => {
  const currentUser = await getCurrentUser();
  const router = useRouter();


  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subtitle="Please Login"/>
      </ClientOnly>
    );
  }

  const handleNavigation = () => {
    router.push(`/reservations`);

  };

  return (
    <ClientOnly>
      <>
        <section className=" w-full text-blue-500">
          <div className="grid place-items-center min-h-[65vh] w-xl">
            <div className="bg-blue-400 text-white px-7 py-4 rounded shadow flex flex-col gap-4 items-center justify-between">
              <span>
                <IoCheckmarkDoneCircleOutline size={48}/>
              </span>
              <div className="flex flex-col items-center justify-center gap-2">
                <h2 className="text-4xl font-bold ">Payment Successful</h2>
                <h3 className="text-2xl font-bold ">Reservation Done</h3>
                <p>Go to reservations to see your reservations</p>
                <span className="min-w-[300px] max-w-[400px]">
                  <Button label="Reservation" onClick={handleNavigation}/>
                </span>
              </div>
            </div>
          </div>
        </section>
      </>
    </ClientOnly>
  );
};

export default PaymentSuccessPage;
