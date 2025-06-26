BEGIN
  FOR loan IN (
    SELECT customer_id, due_date
    FROM loans
    WHERE due_date BETWEEN SYSDATE AND SYSDATE + 30
  ) LOOP
    DBMS_OUTPUT.PUT_LINE(
      'Reminder: Customer ID ' || loan.customer_id || 
      ' has a loan due on ' || TO_CHAR(loan.due_date, 'DD-MON-YYYY')
    );
  END LOOP;
END;
/