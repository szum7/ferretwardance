delete from dbo.[TestTable];

DBCC CHECKIDENT ([TestTable], RESEED, 0)