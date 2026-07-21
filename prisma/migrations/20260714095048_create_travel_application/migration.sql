-- CreateTable
CREATE TABLE "travel_applications" (
    "id" SERIAL NOT NULL,
    "referenceNumber" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "maritalStatus" TEXT NOT NULL,
    "countryOfBirth" TEXT NOT NULL,
    "stateOfBirth" TEXT NOT NULL,
    "localGovernment" TEXT NOT NULL,
    "residentialAddress" TEXT NOT NULL,
    "currentAddress" TEXT NOT NULL,
    "nearestBusStop" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "stateOfResidence" TEXT NOT NULL,
    "isTraveler" BOOLEAN NOT NULL,
    "employmentStatus" TEXT NOT NULL,
    "occupation" TEXT NOT NULL,
    "employerName" TEXT NOT NULL,
    "officePhone" TEXT NOT NULL,
    "employerAddress" TEXT NOT NULL,
    "loanAmount" DECIMAL(12,2) NOT NULL,
    "destinationCountry" TEXT NOT NULL,
    "travelDuration" TEXT NOT NULL,
    "travelPurpose" TEXT NOT NULL,
    "identificationType" TEXT NOT NULL,
    "referralSource" TEXT NOT NULL,
    "bankName" TEXT NOT NULL,
    "accountNumber" TEXT NOT NULL,
    "bvn" TEXT NOT NULL,
    "nextOfKinPhone" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Pending',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "travel_applications_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "travel_applications_referenceNumber_key" ON "travel_applications"("referenceNumber");
